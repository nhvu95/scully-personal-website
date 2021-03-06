import { Component, Input, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { BehaviorSubject } from "rxjs";
import { MainScreenService } from "../main-screen.service";
import { Project } from "./project.model";

@Component({
    selector: "app-portfolio",
    templateUrl: "./portfolio.component.html",
    styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
    @Input()
    currentNavIndex = 0;
    panelOpenState = false;
    loadMore = false;

    cache: Project[] = [];
    constructor(private service: MainScreenService) {}
    _listProjects$: BehaviorSubject<Project[][]> = new BehaviorSubject([]);
    listProjects$ = this._listProjects$.asObservable();
    _listLoadMoreProjects$: BehaviorSubject<Project[][]> = new BehaviorSubject([]);
    listLoadMoreProjects$ = this._listLoadMoreProjects$.asObservable();
    ngOnInit(): void {
        this.getListItem();
    }
    /**
     * Get List
     * @param type
     */
    getListItem(type: number = 3) {
        if (this.cache.length === 0) {
            this.service.getProjectList<Project>().subscribe((res) => {
                this.cache = res;
                this.resultHandler(res, type);
            });
        } else this.resultHandler(this.cache, type);
    }
    /**
     * Handle result
     * @param res
     * @param type
     */
    resultHandler(res: Project[], type: number) {
        let list = [];
        this.loadMore = false;
        res = res.filter((item) => item.projectTypes.indexOf(type) > -1);
        res = res.map((item) => {
            item.displayType = type;
            return item;
        });
        while (res.length > 0) {
            let chunk = res.splice(0, 2);
            if (chunk.length === 1) chunk.push({ ...chunk[0], exist: false });
            list.push(chunk);
        }
        this._listProjects$.next(list.slice(0, 2));
        this._listLoadMoreProjects$.next([]);
        if (list.length > 2) {
            this.loadMore = true;
            this._listLoadMoreProjects$.next(list.slice(2));
        }
    }
    /**
     * On Tab Change
     * @param tab {tab, index}
     */
    tabChanged(tab: MatTabChangeEvent) {
        this.getListItem(tab.index);
    }
}

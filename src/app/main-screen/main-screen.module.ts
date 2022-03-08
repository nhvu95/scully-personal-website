import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FooterModule } from "../shared/footer/footer.module";
import { AfterWorkComponent } from "./after-work/after-work.component";
import { AfterWorkItemComponent } from "./after-work/afterwork-item.component";
import { HelloComponent } from "./hello/hello.component";
import { MainRoutingModule } from "./main-screen-routing.module";
import { MainComponent } from "./main/main.component";
import { PortfolioItemComponent } from "./portfolio/portfolio-item.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [HelloComponent, MainComponent, PortfolioComponent, PortfolioItemComponent, AfterWorkComponent, AfterWorkItemComponent],
    imports: [
        CommonModule,
        MainRoutingModule,
        MatTabsModule,
        HttpClientModule,
        MatTooltipModule,
        FooterModule,
        MatExpansionModule,
        MatChipsModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatFormFieldModule,
    ],
    providers: [],
})
export class MainScreenModule {}

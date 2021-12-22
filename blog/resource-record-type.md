---
title: 'Resource<br>Record types'
description: 'It is possible to set the rowspan and colspan of each mat-grid-tile individually, using the rowspan and colspan properties. If not set, they both default to 1. The colspan must not exceed the number of cols in the mat-grid-list. There is no such restriction on the rowspan however, more rows will simply be added for it the tile to fill.'
date_start: '2021/09/02'
date_end: '2021/09/02'
published: true
image: 'https://dsm01pap001files.storage.live.com/y4mr-AYGxdUdfpMPNHog93bD99-bPjw8Tl0fQJzqvqjjfQwqKZMgGVhqZfGR-5WGlnzRrcREj9cFJIpwYxftPh7Mrq5LFuEnmAqUYkqxfbzAUn7GTTqbKNQFng5ZvTOM8KoFzMhMGTwk_O-WswprJgH2Il4ubnJ28NlPsxsVQnU-gLhuXxiEQGnfe_VTilqfBey?width=660&height=403&cropmode=none'
header_image: 'https://dsm01pap001files.storage.live.com/y4mr-AYGxdUdfpMPNHog93bD99-bPjw8Tl0fQJzqvqjjfQwqKZMgGVhqZfGR-5WGlnzRrcREj9cFJIpwYxftPh7Mrq5LFuEnmAqUYkqxfbzAUn7GTTqbKNQFng5ZvTOM8KoFzMhMGTwk_O-WswprJgH2Il4ubnJ28NlPsxsVQnU-gLhuXxiEQGnfe_VTilqfBey?width=1830&height=1118&cropmode=none'
link: '/blog/this-is-my-post3'
slug: this-is-my-post3
---

When you use some services like Google Domain, Godaddy, and you have to config your domain with an Ip address through a DNS config. You will see a table like this: 

<img src="https://dsm01pap001files.storage.live.com/y4mVGBP0XdkFdWBFGmNUkSV-fiwAP_AShpPpZlkgQDc01ctgkjgB_s4siancjgDrgi75SUMoCmyl6HG4m2-nBDgoQkOIqpANQigCTRbAXVSHe1PNr_FISsK8cy6O0dPAxoS1-iCjIuetpKMTpS7ws4UfEKbj7jgkcwni6r0y7_Huh82lq7J6QLHDQZPPNIfL2JH?width=1021&height=219&cropmode=none" width="100%" />

Did you ever thinks about what is A / AAAA / CNAME ? They are resource record types.


## Resource record types
Resource record provide information about the underlying components of your domain, such as your web host or email provider.  
When someone goes to your website, or uses your domain name to send or receive email, resource records ensure all pieces connect and the website works properly. Resource records can also improve website security and authenticate domain name ownership.

When you add a resource record in Google Domains, you must complete the following fields:
* Host name
* Type
* Time-To-Live
* Data

For detail what to include, refer to the service provider referenced in the record. For example, email servers entered as part of an MX record are defined by your email service provider, such as Google workspace.

## Learn about records for web hosting

### A / AAAA
**Internet Protocol (IP**) addresses are numeric addresses for devices connected to the internet, such as servers and computers. When you create a website, an **A** or **AAAA** record defines the IP address of the website host.

There are 2 version of IP address on the internet: IPv4 and IPv6.  
"**A record**" only hold IPv4 addresses
"**AAAA record**" only hold IPv6 addresses

To determine what IP address to use in an A record, contact your web host.


| Host name  | Type  | TTL  |           Data             |
|------------|-------|------|----------------------------|
|   @        |    A  | 1H   |  123.123.123.123           |
|   @        | AAAA  | 1H   | 2002:db80:1:2:3:4:567:89ab |

**Important**: The @ indicates the resource record applies to your domain name, such as nhvu95.com

### CNAME
Whereas A and AAAA records provide a direct link between a domain or subdomain and a web host IP address, CNAME (Canonical Name) records indicate how to find a host IP address by pointing to another resources record, In this way, a CNAME record acts like an alias.

In this example, you have a domain name nhvu95.com with the following A record:

| Host name  | Type  | TTL  |           Data             |
|------------|-------|------|----------------------------|
|   @        |    A  | 1H   |  123.123.123.123           |

If you want to make sure the same IP address is used when www.nhvu95.com is looked up on the internet, create the following CNAME record:

| Host name  | Type  | TTL  |           Data             |
|------------|-------|------|----------------------------|
|   www      | CNAME | 1H   |  nhvu95.com.               |

**Important:**  
* `www` is interpreted as a prefix for a domain name, such as nhvu95.com, or f2f.nhvu95.com
* The "." at the end of "nhvu95.com." isn't a mistake. it provides a fully-qualified domain name.

## Learn about records for email
| Host name  | Type  | TTL  |           Data             |
|------------|-------|------|----------------------------|
|   @        | MX    | 1H   |  mail.nhvu95.com.          |
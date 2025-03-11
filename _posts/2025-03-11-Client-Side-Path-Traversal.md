---
title: Client-Side Path Traversal (CSPT) - A Deep Dive into an Overlooked Vulnerability
date: 2025-03-11 10:00:00 +0530
categories: [Web Security, Client Side Attacs]
tags: [websecurity, bugbounty, client side ,path traversal  ,api-security, cspt]
render_with_liquid: false
---

### Introduction

Path traversal vulnerabilities have been widely studied in the context of server-side attacks, where an attacker manipulates file paths to access restricted directories and read sensitive files. However, a lesser-known but equally important variant exists—Client-Side Path Traversal (CSPT). Unlike its server-side counterpart, CSPT is exploited in the browser and can be used to manipulate requests sent from the client to unintended API endpoints. This attack vector has remained largely overlooked by security researchers and developers, despite its potential for severe security implications, including authentication bypasses, data exfiltration, and even CSRF-like exploits on modern applications.

## What is CSPT?

Client-side path traversal is a serious security vulnerability that occurs when an attacker manipulates file paths in web applications to gain unauthorized access to files stored on the client-side or server-side. Unlike traditional server-side path traversal attacks, client-side path traversal exploits weaknesses in web browsers, JavaScript, or local file access mechanisms. This flaw can lead to sensitive data exposure, code execution, and other security breaches.

In web applications, developers sometimes use client-side scripts to access and manipulate file paths dynamically. This can lead to vulnerabilities if user input is not properly sanitized. When a web application allows users to specify file paths without strict validation, an attacker can craft malicious inputs to access restricted files.

### Common techniques include:

- Modifying URL parameters to access unintended directories.

- Tampering with JavaScript-based file access mechanisms.

- Leveraging browser exploits to bypass security restrictions.

### How CSPT Differs from Traditional SSPT?

Traditional Server-Side Path Traversal (SSPT) exploits vulnerabilities in backend file systems, allowing attackers to access restricted files such as /etc/passwd or application configuration files. In contrast, Client-Side Path Traversal (CSPT) operates entirely in the browser, targeting client-side JavaScript to alter API request paths. While SSPT is focused on unauthorized file access, CSPT manipulates frontend logic to interact with unintended backend endpoints.

## Key Components of CSPT: Source and Sink

A CSPT vulnerability is composed of two essential elements:

### 1. Source (Entry Point of the Attack)

The source is the point where user input is accepted and processed by the front end before being used in an API request. If this input is not properly sanitized, an attacker can inject path traversal sequences to manipulate the request.

#### Common sources of CSPT include:

- Reflected Input: Parameters passed via query strings, such as:
```
https://example.com/profile?id=1234
```
- DOM-Based Input: Values stored in the browser’s URL fragment, accessible via JavaScript:
```
https://example.com/#user=1234
```
- Stored Input: Data retrieved from the database, such as a user ID saved in a previous session.

### 2. Sink (Exploitable API Endpoint)

The sink is the endpoint where the manipulated request lands. It determines how impactful the vulnerability is, based on what actions the attacker can perform. A sink is a function or endpoint that processes user-supplied input and executes an action based on it. In the case of CSPT, if the front end constructs API requests dynamically and uses user-controlled input to build paths, an attacker can exploit this behavior to force unintended requests. If authentication and authorization checks are not properly implemented, the impact of the attack increases significantly.

## Why is CSPT Dangerous?

CSPT is often underestimated because it does not directly expose server files like traditional path traversal. However, its true power lies in its ability to bypass security controls and perform unauthorized actions on behalf of an authenticated user.

### Potential Impacts of CSPT

#### 1. Accessing Unintended API Endpoints:

Attackers can retrieve or modify restricted resources, such as admin settings or user data.

#### 2. Bypassing Authentication Mechanisms:

If an API endpoint lacks proper authorization checks, CSPT can allow unauthorized users to access privileged information.

#### 3. Performing Unauthorized Actions (State-Changing Requests):

CSPT can modify user accounts, delete resources, or change security settings if state-changing actions (e.g., DELETE, PATCH, PUT) are exposed.

## Exploiting CSPT: A Practical Example

Consider a web application where a user can retrieve their profile information using:
```
GET /api/v1/user/profile?id=1234
```
If the application improperly constructs API calls based on the id parameter, an attacker might inject:
```
GET /api/v1/user/profile?id=../../admin/settings
```
This could cause the front end to send a request to:
```
GET /api/v1/admin/settings
```
which could expose sensitive configuration details. Additionally, if the attacker combines this attack with social engineering techniques, they can trick an authenticated user into executing this malicious request without their knowledge.

## Real-World CSPT Examples

- CSPT has been identified in major applications, including:

- Facebook Bug Bounty Report (Author: Unknown) – A CSPT vulnerability allowed an attacker to access unintended API endpoints.

- GitLab 1-Click CSRF (Johan Carlsson) – CSPT was used to perform an unauthorized state-changing request.

- Mattermost & Rocket.Chat – Security researchers discovered CSPT vulnerabilities that could be exploited for API manipulation.

## Impact of CSPT

CSPT poses serious risks, particularly when it leads to privilege escalation or unauthorized actions. As applications rely more on client-side API calls, the ability to manipulate request paths without directly interacting with the server-side logic makes CSPT an attractive target for attackers. The lack of widespread discussion and research on CSPT also makes it a blind spot in many security assessments.

### Why is No One Talking About This?

Despite its severity, CSPT remains largely overlooked for several reasons:

##### Focus on Traditional Path Traversal:

Security research has historically emphasized server-side file access vulnerabilities rather than client-side request manipulations.

##### Difficult to Detect with Automated Tools:

Most security scanners focus on server-side vulnerabilities, meaning CSPT often requires manual testing.

##### Underestimation of Client-Side Threats:

Developers often assume that client-side security flaws are less impactful than server-side issues, leading to insufficient protections.

## Conclusion

Client-Side Path Traversal (CSPT) is an underrated but powerful attack vector that can be leveraged to manipulate API requests, bypass security controls, and exploit application logic. While it does not grant direct file access like server-side path traversal, its ability to reroute authenticated API calls makes it a serious threat to modern web applications. Security researchers and developers must recognize CSPT as a high-impact vulnerability and implement proper mitigations, such as strict URL validation, request integrity checks, and enhanced authorization controls.

By understanding CSPT’s sources, sinks, and exploitation techniques, we can improve web security and defend against this evolving class of vulnerabilities.


### References
- https://www.verylazytech.com/client-side-path-traversal
- [Whitepaper by Doyensec](https://www.doyensec.com/resources/Doyensec_CSPT2CSRF_Whitepaper.pdf)

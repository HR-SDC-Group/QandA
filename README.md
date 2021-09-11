# Atelier Questions and Answers API

Lightweight, scalable microservice serving a growing [ecommerce front-end](https://github.com/RFP54-Helios/FEC)

## Contents

- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)

---

### Tech Stack

![node](https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg)

- Node.js provides an asynchronous event-driven runtime environment for building scalable network applications

![express](https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg)

- Express was chosen for it's minimal interface and flexible HTTP routing methods

![postgres](https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg)

- PostreSQL is used here as a robust and stable open source database

![nginx](https://www.vectorlogo.zone/logos/nginx/nginx-ar21.svg)

- NGINX enables load balancing HTTP traffic between between many routers

---

### System Architecture
Phase 1 - Phase 1 is most optimal between 1 - 2000 concurrent users. This design aim to minimize the server cost by horizontally scaling.

![](https://i.imgur.com/mGDWrVG.png)

Phase 2 - Phase 2 system design aims to handle above 2000 concurrent users. As the user base increases, the stress on the database dramatically increases. In order to handle the stress, load balancer, memory cache, vertically scaling and sharding will be instrumental in the efficiency of the queries. Vertically scaling a server will be cost intensive.

![](https://i.imgur.com/o0OkDyu.png)

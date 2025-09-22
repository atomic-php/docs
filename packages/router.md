---
title: Router
---

# Router

Blazingly fast PSR‑7/15 router with compile‑time optimized dispatch.

## Installation

```bash
composer require atomic/router
```

## Quick Start

```php
use Atomic\Router\Router;

$router = new Router();
$router->add('GET', '/health', fn () => new \Nyholm\Psr7\Response(200, [], 'ok'));
```

## Docs

See the package README for full API and middleware examples.


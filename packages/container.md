---
title: Container
---

# Container

Lightweight PSR‑11 container with a compile step for maximum performance.

## Installation

```bash
composer require atomic/container
```

## Quick Start

```php
use Atomic\Container\ContainerBuilder;
use Psr\Container\ContainerInterface;

$builder = new ContainerBuilder();
$builder->set('config', ['env' => 'prod']);
$builder->set('logger', fn (ContainerInterface $c) => new Logger($c->get('config')), shared: true);
$container = $builder->compile();
```

## Docs

See the package README for API, error handling, and benchmarks.


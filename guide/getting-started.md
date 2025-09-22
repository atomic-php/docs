---
title: Getting Started
---

# Getting Started

Install packages via Composer and use them independently:

```bash
composer require atomic/http-kernel
composer require atomic/router
composer require atomic/container
```

### HTTP Kernel (PSR‑15)

```php
use Atomic\Http\Kernel;
use Atomic\Http\MiddlewareStack;
use Psr\Http\Server\RequestHandlerInterface;

$stack = new MiddlewareStack();
$kernel = new Kernel(new class implements RequestHandlerInterface {
    public function handle($req) { return new \Nyholm\Psr7\Response(200); }
}, $stack);
```

### Router (PSR‑7/15)

```php
use Atomic\Router\Router;

$router = new Router();
$router->add('GET', '/health', fn () => new \Nyholm\Psr7\Response(200, [], 'ok'));
```

### Container (PSR‑11)

```php
use Atomic\Container\ContainerBuilder;
use Psr\Container\ContainerInterface;

$builder = new ContainerBuilder();
$builder->set('config', ['env' => 'prod']);
$builder->set('logger', fn (ContainerInterface $c) => new Logger($c->get('config')), shared: true);
$container = $builder->compile();
```


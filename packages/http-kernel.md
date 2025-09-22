---
title: HTTP Kernel
---

# HTTP Kernel

Ultra‑slim PSR‑15 kernel with compile‑time middleware pipelines.

## Installation

```bash
composer require atomic/http-kernel
```

## Quick Start

```php
use Atomic\Http\Kernel;
use Atomic\Http\MiddlewareStack;
use Psr\Http\Server\RequestHandlerInterface;

$stack = new MiddlewareStack();
$kernel = new Kernel(new class implements RequestHandlerInterface {
    public function handle($req) { return new \Nyholm\Psr7\Response(200); }
}, $stack);
```

## Docs

For full API and benchmarks, see the package README in the repository.


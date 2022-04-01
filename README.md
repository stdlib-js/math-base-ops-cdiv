<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# divide

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Divide two complex numbers.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import cdiv from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-cdiv@deno/mod.js';
```

#### cdiv( \[out,] re1, im1, re2, im2 )

Divides two `complex` numbers where each `complex` number is comprised of a **real** component `re` and an **imaginary** component `im`.

```javascript
var v = cdiv( -13.0, -1.0, -2.0, 1.0 );
// returns [ 5.0, 3.0 ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var out = new Float64Array( 2 );

var v = cdiv( out, -13.0, -1.0, -2.0, 1.0 );
// returns <Float64Array>[ 5.0, 3.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@deno/mod.js';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@deno/mod.js';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@deno/mod.js';
import cdiv from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-cdiv@deno/mod.js';

var re;
var im;
var z1;
var z2;
var z3;
var o;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z1 = new Complex128( re, im );

    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z2 = new Complex128( re, im );

    o = cdiv( real(z1), imag(z1), real(z2), imag(z2) );
    z3 = new Complex128( o[ 0 ], o[ 1 ] );

    console.log( '(%s) / (%s) = %s', z1.toString(), z2.toString(), z3.toString() );
}
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Smith, Robert L. 1962. "Algorithm 116: Complex Division." _Commun. ACM_ 5 (8). New York, NY, USA: ACM: 435. doi:[10.1145/368637.368661][@smith:1962a].
-   Stewart, G. W. 1985. "A Note on Complex Division." _ACM Trans. Math. Softw._ 11 (3). New York, NY, USA: ACM: 238–41. doi:[10.1145/214408.214414][@stewart:1985a].
-   Priest, Douglas M. 2004. "Efficient Scaling for Complex Division." _ACM Trans. Math. Softw._ 30 (4). New York, NY, USA: ACM: 389–401. doi:[10.1145/1039813.1039814][@priest:2004a].
-   Baudin, Michael, and Robert L. Smith. 2012. "A Robust Complex Division in Scilab." _arXiv_ abs/1210.4539 \[cs.MS] (October): 1–25. [&lt;https://arxiv.org/abs/1210.4539>][@baudin:2012a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/ops/cadd`][@stdlib/math/base/ops/cadd]</span><span class="delimiter">: </span><span class="description">add two complex numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/ops/cmul`][@stdlib/math/base/ops/cmul]</span><span class="delimiter">: </span><span class="description">multiply two complex numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/ops/csub`][@stdlib/math/base/ops/csub]</span><span class="delimiter">: </span><span class="description">subtract two complex numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-ops-cdiv.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-ops-cdiv

[test-image]: https://github.com/stdlib-js/math-base-ops-cdiv/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-ops-cdiv/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-ops-cdiv/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-ops-cdiv?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-ops-cdiv.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-ops-cdiv/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-ops-cdiv/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-ops-cdiv/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-ops-cdiv/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops-cdiv/main/LICENSE

[@smith:1962a]: https://doi.org/10.1145/368637.368661

[@stewart:1985a]: https://doi.org/10.1145/214408.214414

[@priest:2004a]: https://doi.org/10.1145/1039813.1039814

[@baudin:2012a]: https://arxiv.org/abs/1210.4539

<!-- <related-links> -->

[@stdlib/math/base/ops/cadd]: https://github.com/stdlib-js/math-base-ops-cadd/tree/deno

[@stdlib/math/base/ops/cmul]: https://github.com/stdlib-js/math-base-ops-cmul/tree/deno

[@stdlib/math/base/ops/csub]: https://github.com/stdlib-js/math-base-ops-csub/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->

# Parcel 기본 템플릿

__npm init__ : 프로젝트 시작!

- __Parcel__: 모듈(패키지) 번들러의 핵심 패키지<br>
`npm i -D parcel-bundler` : 번들러 개발 의존성으로 설치


__html-webpack-plugin__: 최초 실행될 HTML 파일(템플릿)을 연결<br>
__copy-webpack-plugin__: 정적 파일(파비콘, 이미지 등)을 제품(`dist`) 폴더로 복사<br>


__@babel/core__: ES6 이상의 코드를 ES5 이하 버전으로 변환<br>
__@babel/preset-env__: Babel 지원 스펙을 지정<br>
__@babel/plugin-transform-runtime__: Async/Await 문법 지원<br>

__sass__: SCSS(Sass) 문법을 해석(스타일 전처리기)<br>
__postcss__: Autoprefixer 등의 다양한 스타일 후처리기 패키지<br>
__autoprefixer__: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인<br> 

## 주의사항!

- postcss, autoprefixer호환 문제 발생시, 
-   에러메시지 검색 or 보통 autoprefixer 10버전, postcss 8버전과 마찰이 있음
-   autoprefixer다운그레이드 필요 `(npm i -D autoprefixer@9)(9버전)`


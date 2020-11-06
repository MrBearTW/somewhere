# Template Inheritance
- @extends -> @section & @yield
    - The @section directive, as the name implies, defines a section of content, while the @yield directive is used to display the contents of a given section.
    - @yield 
    - The @endsection directive will only define a section while @show will define and immediately yield the section.

- @extends
    - layout 對 child page
    - @section('AAA') @show 對 ＠section @endsection
        - child page 可多加 @parent 保留內容
    - @section('BBB','CCC') 對 @yield('BBB')


# Displaying Data
- `{{ }}` 執行 php
    - Blade `{{ }}` statements are automatically sent through PHP's htmlspecialchars function to prevent XSS attacks.

## Displaying Unescaped Data
- {!! XXX !!} 不執行 php

- @json 
    - @json directive accepts the same arguments as PHP's json_encode function

- HTML Entity Encoding (double encoding) 可開關

# Blade & JavaScript Frameworks
- 因可能會和其他 JavaScript 衝突
    - 在前方加一個 `＠`，則 Blade engine 不處理，留下 {{}} 給其他 JavaScript Frameworks
    - 若是有大量需要加的，再查一下 `@verbatim`

# Control Structures
## If Statements
- @if, @elseif, @else, and @endif
- @unless
- @isset and @empty
- @auth and @guest

## Section Directives
- @hasSection
- @sectionMissing

## Environment Directives
- @production @endproduction
- @env(['staging', 'production']) @endenv

## Switch Statements
- @switch, @case, @break, @default and @endswitch

## Loops
- @for  @endfor
- @foreach ($users as $user)    @endforeach
- @forelse ($users as $user)    @empty  @endforelse
- @while (true) @endwhile
- @continue @break
- The Loop Variable / useful properties

## Comments
- {{-- --}}

## php
@php
    //
@endphp

## The @once Directive
- @once @endonce

# Forms
## CSRF Field
- @csrf

## Method Field
- @method('PUT')
    - PUT, PATCH, or DELETE

## Validation Errors
- @error
    - @error('title')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
- 可能會有第二個參數
    - @error('email', 'login')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror

# Components
- Components and slots provide similar benefits to sections and layouts; however, some may find the mental model of components and slots easier to understand. 
- There are two approaches to writing components
    - class based components
    - anonymous components
- 可用 `php artisan make:component Alert` 指令，會製造出兩個檔案
    - component in `app/View/Components`
    - view template in `resources/views/components`
## Manually Registering Package Components
- you will need to manually register your component class and its HTML tag alias.
```php
    use Illuminate\Support\Facades\Blade;
    public function boot()
{
    Blade::component('package-alert', AlertComponent::class);
}
```
- Once your component has been registered, it may be rendered using its tag alias: `<x-package-alert/>`

## Displaying Components
## Passing Data To Components
### Casing
### Component Methods
### Using Attributes & Slots Inside The Class
### Additional Dependencies
- 若需要 Laravel's service container 在所有 Components 資料屬性之前列出，會自動導入這一個 container

## Managing Attributes
- 修改 div 參數

### Default / Merged Attributes
### Non-Class Attribute Merging


## Slots
## Inline Component Views
## nonymous Components
## Dynamic Components


- @components -> @slots
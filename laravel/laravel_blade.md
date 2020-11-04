- @extends -> @section
    - The @section directive, as the name implies, defines a section of content, while the @yield directive is used to display the contents of a given section.
    - @yield 

- @components -> @slots



- `{{ }}` 執行 php
    - Blade `{{ }}` statements are automatically sent through PHP's htmlspecialchars function to prevent XSS attacks.

- {!! XXX !!} 不執行 php


- @json 
    - @json directive accepts the same arguments as PHP's json_encode function
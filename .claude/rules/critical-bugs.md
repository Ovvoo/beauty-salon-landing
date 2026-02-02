# Critical Bugs

| Баг | Решение |
|-----|---------|
| Hooks after return | Все хуки ДО early return |
| Empty array dep | `const EMPTY: T[] = []` вне компонента |
| setTimeout leak | `useRef` + cleanup |
| CSS hex | `bg-card`, не `bg-[#...]` |

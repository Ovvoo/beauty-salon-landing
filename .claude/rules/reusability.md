# Reusability

Перед созданием → ищи существующий компонент → расширяй через props.

| ❌ Плохо | ✅ Хорошо |
|----------|-----------|
| `CourseCard`, `ReviewCard` | `Card` с `variant` prop |
| `uploadCourseImage()` | `uploadImage(type)` |

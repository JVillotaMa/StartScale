# Internationalization (i18n) Implementation

This landing page now supports multiple languages (Spanish and English) with automatic language detection and manual language switching.

## Features Implemented

### 🌍 Automatic Language Detection
- Detects browser language on first visit
- Falls back to Spanish as default
- Remembers user's language choice in localStorage

### 🔄 Language Toggle
- Fixed position language toggle in top-right corner
- Flag icons for visual language identification
- Smooth animations using Framer Motion
- Responsive design

### 📱 Language Persistence
- User's language choice is saved to localStorage
- Language preference persists across browser sessions

### 🛠 Technical Implementation

#### Architecture
- **Context-based**: Uses React Context for state management
- **Dynamic imports**: Translation files are loaded dynamically
- **Type-safe**: Full TypeScript support
- **Performance optimized**: Only loads necessary translation files

#### File Structure
```
src/
├── contexts/
│   └── LanguageContext.tsx    # Language state management
├── components/
│   └── LanguageToggle.tsx     # Language switcher component
└── messages/
    ├── es.json                # Spanish translations
    └── en.json                # English translations
```

#### Translation Files
Translation files are organized by sections:
- `hero`: Hero section content
- `context`: Context section content  
- `metadata`: Page metadata

#### Usage in Components
```tsx
import { useLanguage } from '../contexts/LanguageContext'

function MyComponent() {
  const { t, language, setLanguage } = useLanguage()
  
  return (
    <div>
      <h1>{t('hero.mainTitle')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  )
}
```

#### Translation Function Features
- **Parameter interpolation**: `t('hero.spotsAvailable', { spotsLeft, totalSpots })`
- **Nested keys**: `t('hero.mainTitle')`
- **Fallback support**: Shows key name if translation missing
- **Error handling**: Graceful fallback to Spanish if English fails

### 🎨 UI Components

#### LanguageToggle Component
- Fixed positioning (top-right)
- Flag emojis (🇪🇸 🇺🇸)
- Active state indication
- Smooth transitions
- Accessible with proper titles

### 🔧 Current Implementation Status

#### ✅ Completed
- [x] Language context and provider
- [x] Language toggle component
- [x] Spanish translations (complete)
- [x] English translations (complete)
- [x] HeroSection internationalized
- [x] ContextSection internationalized
- [x] Browser language detection
- [x] Language persistence

#### 🚧 To Be Added (Future Updates)
- [ ] Remaining components (Footer, Modals, etc.)
- [ ] Date/time localization
- [ ] Number formatting
- [ ] Currency formatting
- [ ] RTL language support
- [ ] Additional languages

### 🌟 Key Benefits

1. **SEO Friendly**: Each language can have specific metadata
2. **User Experience**: Automatic detection + manual control
3. **Maintainable**: Centralized translation management
4. **Scalable**: Easy to add more languages
5. **Performance**: Dynamic loading prevents bundle bloat

### 🔍 Testing

To test the internationalization:

1. **Automatic Detection**: 
   - Set browser language to English and refresh
   - Should automatically show English content

2. **Manual Toggle**:
   - Click flag buttons in top-right corner
   - Content should switch immediately
   - Language choice should persist on refresh

3. **Fallback**:
   - Language defaults to Spanish if detection fails
   - English falls back to Spanish if loading fails

### 📝 Adding New Translations

1. Add the key to both `messages/es.json` and `messages/en.json`
2. Use the translation in components with `t('section.key')`
3. For complex text with styling, split around the styled parts

Example:
```json
{
  "hero": {
    "newText": "This is a new translation"
  }
}
```

```tsx
<p>{t('hero.newText')}</p>
```

This implementation provides a solid foundation for a multilingual landing page with room for future expansion. 
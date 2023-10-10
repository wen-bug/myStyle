// src/i18n/index.ts
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    legacy: false,
    locale: 'chs', // set locale
    messages: {
        chs: {
                hello: '你好世界',

        },
        eng: {
            message: {
                hello: 'hello world',
            },
        },
    },
})

export default i18n

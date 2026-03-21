import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">🎮 Аккаунты в наличии</Badge>,
    title: "Прокачанные аккаунты. Без гринда.",
    showButton: true,
    buttonText: 'Смотреть каталог',
    buttonLink: '/catalog',
    image: 'https://cdn.poehali.dev/projects/d9df9b4c-e54f-4219-a267-85a718fea7db/files/c62832c5-88f2-415d-95ee-43ca2a7e3461.jpg'
  },
  {
    id: 'about',
    title: 'Почему покупают у нас?',
    content: 'Продаём игровые аккаунты Brawl Stars, Rust, Clash Royale и других игр. Быстрая передача, честные цены, гарантия на каждый аккаунт.'
  },
  {
    id: 'features',
    title: 'Безопасно и быстро.',
    content: 'Все аккаунты проверены вручную. Передача в течение 15 минут после оплаты. Поддержка 24/7 — решаем любые вопросы.'
  },
  {
    id: 'testimonials',
    title: 'Тысячи довольных игроков.',
    content: 'Работаем с 2022 года. Сотни успешных сделок каждый месяц. Постоянные клиенты возвращаются снова — это лучшая оценка нашей работы.'
  },
  {
    id: 'join',
    title: 'Найди свой аккаунт.',
    content: 'Brawl Stars, Rust, Clash Royale и другие. Выбери нужную игру и получи аккаунт уже сегодня.',
    showButton: true,
    buttonText: 'Написать нам',
    buttonLink: 'https://t.me/barsik_pedalka'
  },
]
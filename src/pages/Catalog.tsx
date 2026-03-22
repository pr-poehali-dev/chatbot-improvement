import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const games = [
  {
    id: "brawl-stars",
    name: "Brawl Stars",
    image: "https://cdn.poehali.dev/projects/d9df9b4c-e54f-4219-a267-85a718fea7db/bucket/7622f493-7fe9-4363-bb9e-002bb8b501a2.jpg",
    color: "from-purple-600/80 to-yellow-500/80",
    accounts: [
      { label: "Старт", desc: "1500+ кубков, 15+ бравлеров", price: "329 ₽" },
      { label: "Про", desc: "20 000+ кубков, 30+ бравлеров", price: "599 ₽" },
      { label: "Макс", desc: "50 000+ кубков, все бравлеры", price: "1 999 ₽" },
    ],
  },
  {
    id: "rust",
    name: "Rust",
    image: "https://cdn.poehali.dev/projects/d9df9b4c-e54f-4219-a267-85a718fea7db/bucket/5796cd91-30df-4f61-a4c7-58c93f5321f5.png",
    color: "from-orange-700/80 to-red-900/80",
    accounts: [
      { label: "Базовый", desc: "Чистый аккаунт, без банов", price: "799 ₽" },
      { label: "С скинами", desc: "Редкие скины, 500+ часов", price: "1 399 ₽" },
      { label: "Прокачан", desc: "Топовые скины, 2000+ часов", price: "2 999 ₽" },
    ],
  },
  {
    id: "clash-royale",
    name: "Clash Royale",
    image: "https://cdn.poehali.dev/projects/d9df9b4c-e54f-4219-a267-85a718fea7db/bucket/8f542013-f65e-46f0-a90f-ce7e690bd8e8.png",
    color: "from-blue-600/80 to-yellow-400/80",
    accounts: [
      { label: "Арена 6+", desc: "Прокачанная колода, лига", price: "199 ₽" },
      { label: "Мастер", desc: "Мастерская лига, редкие карты", price: "699 ₽" },
      { label: "Чемпион", desc: "Чемпионская лига, макс. карты", price: "3 490 ₽" },
    ],
  },
  {
    id: "gta5",
    name: "GTA 5",
    image: "https://cdn.poehali.dev/projects/d9df9b4c-e54f-4219-a267-85a718fea7db/bucket/404625f4-34f3-47af-8c17-8dd005bcc465.jpg",
    color: "from-green-700/80 to-gray-900/80",
    accounts: [
      { label: "Старт", desc: "Чистый аккаунт, GTA", price: "699 ₽" },
      { label: "Богатый", desc: "100 млн $, прокачанный персонаж", price: "799 ₽" },
      { label: "Топ", desc: "Максимальный уровень, все разблокировано", price: "1 499 ₽" },
    ],
  },
]

export default function Catalog() {
  return (
    <div className="min-h-screen bg-[#060606] text-white">
      <div className="sticky top-0 z-10 bg-[#060606]/90 backdrop-blur border-b border-neutral-800 px-6 py-4 flex items-center gap-4">
        <Link to="/" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
          <Icon name="ArrowLeft" size={18} />
          Назад
        </Link>
        <h1 className="text-xl font-bold">Каталог аккаунтов</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {games.map((game, gi) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: gi * 0.15 }}
          >
            <div className="relative rounded-2xl overflow-hidden mb-6 h-40">
              <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-r ${game.color}`} />
              <div className="absolute inset-0 flex items-center px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{game.name}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {game.accounts.map((acc, ai) => (
                <motion.div
                  key={ai}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: gi * 0.15 + ai * 0.1 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col gap-4 hover:border-[#FF4D00]/60 transition-colors"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#FF4D00]">{acc.label}</span>
                    <p className="text-neutral-400 text-sm mt-2">{acc.desc}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{acc.price}</span>
                    <a
                      href={`https://t.me/barsik_pedalka?text=Хочу купить аккаунт ${game.name} — ${acc.label} (${acc.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-[#FF4D00] hover:bg-[#e04400] text-white border-0"
                      >
                        Купить
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <div className="text-center py-8 text-neutral-500 text-sm">
          Не нашли нужный аккаунт? — напишите нам, подберём под ваш запрос.{" "}
          <a href="https://t.me/barsik_pedalka" target="_blank" rel="noopener noreferrer" className="text-[#FF4D00] hover:underline">@barsik_pedalka</a>
        </div>
      </div>
    </div>
  )
}
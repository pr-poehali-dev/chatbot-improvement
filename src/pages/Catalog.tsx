import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function Catalog() {
  return (
    <div className="min-h-screen bg-[#060606] text-white flex flex-col items-center justify-center p-8">
      <Link to="/" className="absolute top-6 left-6 text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
        <Icon name="ArrowLeft" size={18} />
        Назад
      </Link>
      <div className="text-center max-w-lg">
        <div className="text-6xl mb-6">🎮</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Каталог аккаунтов</h1>
        <p className="text-neutral-400 text-lg mb-8">
          Здесь будет каталог игровых аккаунтов — Brawl Stars, Rust, Clash Royale и другие.
        </p>
        <div className="border border-neutral-800 rounded-xl p-8 text-neutral-500">
          <Icon name="Construction" size={32} className="mx-auto mb-4 text-[#FF4D00]" />
          <p className="text-sm">Страница в разработке. Скоро здесь появятся аккаунты!</p>
        </div>
      </div>
    </div>
  )
}

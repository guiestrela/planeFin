import { Button } from '@/src/components/shared/Button'
import { Clock, TrendingUp, Wallet } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  return (
    <header className="border-b border-(--border) px-6 py-3">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg--primary flex h-9 w-9 items-center justify-center rounded-full">
            <Wallet size={20} className="text-primary-foreground" />
          </div>
          <span className="text-lg">
            <span className="text-muted-foreground font-medium">PlaneJ</span>
            <span className="font-extrabold">.ai</span>
          </span>
        </div>
        {/* Actions Buttons*/}
        <div className="flex items-center gap-1">
          <Button
            variant="secondary"
            icon={TrendingUp}
            onClick={() => void navigate('/')}
          >
            <span className="sm-inline hidden">Nova Simulação</span>
          </Button>
          <Button
            variant="ghost"
            icon={Clock}
            onClick={() => void navigate('/historico')}
          >
            <span className="sm-inline hidden">Histórico</span>
          </Button>
        </div>
      </nav>
    </header>
  )
}

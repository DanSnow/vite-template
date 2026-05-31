import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="p-8 flex flex-col gap-2">
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <Button variant="outline">Button</Button>
    </div>
  )
}

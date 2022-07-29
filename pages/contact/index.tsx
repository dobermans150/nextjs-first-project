import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function ContactPage() {
  return (

    <MainLayout>

      <h1 >Contact Page</h1>

      <h1 className="title">
        Ir al <Link href="/" prefetch={false}>Home.js</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">contact/about.js</code>
      </p>
    </MainLayout>

  )
}

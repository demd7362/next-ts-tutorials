
type LayoutProps = {
    children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
    return (
        <form>
            <h2>Create</h2>
            {children}
        </form>
    )

}
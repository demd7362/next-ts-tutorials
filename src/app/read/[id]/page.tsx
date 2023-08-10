export default async function Read({ params }: LayoutProps) {
    const response = await fetch(`http://localhost:9999/topics/${params.id}`);
    const { title } = await response.json();
    return (
        <>page param : {title}</>
    )
}
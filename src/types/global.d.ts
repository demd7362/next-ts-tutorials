interface Params {
    [key: string]: string | string[]
}
interface Topic {
    id?: number,
    title?: string,
    body?: string,
}

interface TopicFormEvent extends EventTarget {
    title: string,
    body: string
}

type LayoutProps = {
    children: React.ReactNode,
    params: Params
}
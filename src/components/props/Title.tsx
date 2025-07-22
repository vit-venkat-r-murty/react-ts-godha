type TitleProps = {
   children: string
}

export default function Title({ children }: TitleProps) {
   return <h2>{children}</h2>
}

import clsx from "clsx"

type GlassPaneType = {
    children: any,
    className: string,
}

const GlassPane = ({children, className}: GlassPaneType) => {
    return(
        <div className={clsx('glass rounded-2xl border-solid border-2 border-gray-200', className)}>
            {children}
        </div>
    )
}

export default GlassPane
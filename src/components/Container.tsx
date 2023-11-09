const Container: React.FC = ({children}) => {
    return (
        <div className="md:w-[765px] w-auto mx-auto">
            {children}
        </div>
    )
}

export default Container
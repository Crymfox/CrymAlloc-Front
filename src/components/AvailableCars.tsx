import Card from "./Card"
import useCar from "../hooks/useCar"

const AvailableCars = () => {
    const {cars, error} = useCar('')
    return (
        <div className="flex flex-wrap gap-8 justify-center">
            {
                cars.length ? cars.map((data, key) => {
                    return (
                        <Card
                            key={key}
                            id={data.id}
                            type={data.type}
                            color={data.color}
                            price={data.price}
                            available
                        />
                    )
                }) : <h1> {error} </h1>
            }
        </div>
    )
}

export default AvailableCars
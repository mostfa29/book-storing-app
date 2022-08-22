import { ThreeDots } from "react-loader-spinner"

export const CustomLoader = ({text,isLoading}) => {
    return (
    <div>
                    {isLoading? <ThreeDots type='ThreeDots' color='#fff' height={10} /> : text}
</div>
    )
}
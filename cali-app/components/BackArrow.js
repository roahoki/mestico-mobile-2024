import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackArrow = ({style}) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        fill="none"
    >
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m15 19-7-7 7-7"
        />
    </Svg>
)
export default BackArrow

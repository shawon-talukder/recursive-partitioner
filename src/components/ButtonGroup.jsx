import PropTypes from "prop-types";
import Button from './Button';

const ButtonGroup = ({ isRoot }) => {
    return (
        <div className="inline-flex rounded-md shadow-sm" role="group">
            <Button
                label="H"
                handleClick={() => { console.log("horizontal something") }}
                classes={"border rounded-s-lg"} />
            <Button
                label="V"
                handleClick={() => { console.log("vertical something") }}
                classes={"border-t border-b"} />
            <Button
                label="-"
                handleClick={() => { console.log("remove something") }}
                classes={"border rounded-e-lg "}
                isDisabled={isRoot} />
        </div>
    )
}
ButtonGroup.propTypes = {
    isRoot: PropTypes.bool
}
export default ButtonGroup
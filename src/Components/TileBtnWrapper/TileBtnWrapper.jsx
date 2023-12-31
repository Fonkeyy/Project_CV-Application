import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './TileBtnWrapper.module.css';
// * Display an edit and a delete buttons with click handle by parent component
function TileBtnWrapper({ id, handleEdit, onDelete }) {
    return (
        <div className={styles.tile_btn_wrapper}>
            <Button className="edit_btn" onClick={handleEdit} />
            <Button
                className="delete_btn"
                onClick={() => {
                    onDelete(id);
                }}
            />
        </div>
    );
}

TileBtnWrapper.propTypes = {
    id: PropTypes.string.isRequired,
    handleEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TileBtnWrapper;

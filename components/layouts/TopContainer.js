import style from "./TopContainer.module.scss";

const TopContainer = () => {

    return (
        <div className={style.outer}>
            <div className={style.inner}></div>
            <div className={style.inner_most}>
                <div className={style.inner_left_shape}></div>
            </div>
        </div>
    )
}

export default TopContainer;
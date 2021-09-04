import Loader from 'react-loader-spinner';

export const ReactLoader = () => {
    return (
        <Loader
            type="TailSpin"
            color="#ccc"
            height={60}
            width={60}
        />
    );
}
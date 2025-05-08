const SectionTitle = ({ title, mb = 'mb-0', textAlign = 'left' }) => {
    const alignmentClass = textAlign === 'center' ? 'justify-center text-center' : 'justify-start text-left';

    return (
        <div className={`w-full flex ${alignmentClass} ${mb}`}>
            <h3
                className={`
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    text-[#272343]
                    font-semibold
                    font-inter
                    capitalize
                `}
            >
                {title}
            </h3>
        </div>
    );
};

export default SectionTitle;

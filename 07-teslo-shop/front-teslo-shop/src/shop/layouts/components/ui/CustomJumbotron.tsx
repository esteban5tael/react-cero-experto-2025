interface ICustomJumbotronProps {
    title: string;
    subtitle?: string;
}

export const CustomJumbotron = ({
    title,
    subtitle,
}: ICustomJumbotronProps) => {
    const defaultSubtitle: string =
        "Bienvenido a nuestra tienda en línea, donde la moda se encuentra con la innovación. Explora nuestra exclusiva colección de ropa inspirada en el diseño futurista de Tesla.";
    return (
        <>
            {/* Hero Section */}
            <section className="py-10 px-4 lg:px-8 bg-muted/30">
                <div className="container mx-auto text-center">
                    <h1 className="text-2xl lg:text-5xl font-montserrat tracking-tight mb-6">
                        {title}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        {subtitle || defaultSubtitle}
                    </p>
                </div>
            </section>
        </>
    );
};

export default CustomJumbotron;

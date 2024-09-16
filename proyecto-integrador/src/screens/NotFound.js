import React from "react";


function NotFound() {

    // acá le pongo estilos, adentro de la screen para no crear un css adentro de la crpeta
    const styles = {
        container: {
            textAlign: "center",
            padding: "50px",
            backgroundColor: "#f0f0f0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        title: {
            fontSize: "4rem",
            color: "black",
            marginBottom: "20px",
        },
        subtitle: {
            fontSize: "1.5rem",
            color: '#666',
            marginBottom: "40px",
            animation: "fadeIn 3s ease-in-out",
        },
        button: {
            padding: "10px 20px",
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textDecoration: "none",
            transition: "background-color 0.3s ease",
            animation: "fadeIn 4s ease-in-out",
        },
        buttonHover: {
            backgroundColor: "#0056b3",
        },
        "@keyframes fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 1 },
        }
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}> 404 - Not Found :( </h1>
            <p style={styles.subtitle}>Oops! The page you're looking for doesn't exist.</p>
            <a href="/" style={{...styles.button}} 
               onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
               onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}>
               Go Back to Home
            </a>
        </div>
    );
}

export default NotFound;

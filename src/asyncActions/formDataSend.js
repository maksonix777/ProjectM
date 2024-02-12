// formDataSend.js
const formDataSend = async (data) => {
    try {
        const response = await fetch('http://localhost:3333/sale/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // alert('Coupon was sent successfully!');
            console.log(response);
            console.log(data + ' DATA FROM FORM');
        } else {
            // alert('Registration error!');
        }
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
};

export default formDataSend;

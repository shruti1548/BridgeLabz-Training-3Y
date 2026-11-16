// FormBuilder class
class FormBuilder {
    constructor() {
        this.fields = [];
    }

    // Add fields to the form
    addField(fieldName, fieldType) {
        this.fields.push({
            name: fieldName,
            type: fieldType
        });
    }

    // Generate HTML form structure
    generateForm() {
        let formHTML = "";

        this.fields.forEach(field => {
            formHTML += `
                <label>${field.name}</label>
                <input type="${field.type}" name="${field.name}">
                <br>
            `;
        });

        return formHTML;
    }

    // Get form data
    getFormData(formValues) {
        const formData = {};

        this.fields.forEach(field => {
            formData[field.name] = formValues[field.name] || "";
        });

        return formData;
    }
}

// Create form builder object
const form = new FormBuilder();

// Add form fields
form.addField("Name", "text");
form.addField("Email", "email");
form.addField("Password", "password");

// Generate form HTML
const generatedHTML = form.generateForm();

console.log("Generated Form HTML:");
console.log(generatedHTML);

// Example form values
const userInput = {
    Name: "Shruti",
    Email: "shruti@gmail.com",
    Password: "Hello@123"
};

// Display form data
console.log("Form Data:");
console.log(form.getFormData(userInput));
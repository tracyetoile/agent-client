<template>
  <main class="contact-container">
    <section class="contact-header">
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? Reach out to our system administration team.</p>
    </section>

    <div class="contact-grid">
      <!-- Contact Form Section -->
      <section class="form-card">
        <h2>Send a Message</h2>
        
        <!-- Form submission intercepts via Vue event mod handler -->
        <form @submit.prevent="handleFormSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              placeholder="John Doe" 
              required 
            />
          </div>
          
          <div class="form-group">
            <label for="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              placeholder="john@example.com" 
              required 
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              v-model="formData.message" 
              placeholder="How can we help you?" 
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </section>

      <!-- Contact Info Section -->
      <section class="info-sidebar">
        <div class="info-block">
          <h3>Support Email</h3>
          <p>support@agencyportal.com</p>
        </div>

        <div class="info-block">
          <h3>Office Headquarters</h3>
          <p>100 Innovation Way, Suite 400<br />Tech City, TC 94016</p>
        </div>

        <div class="info-block">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Strong compile-time interface definitions
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Instantiate internal component memory state
const formData = ref<ContactForm>({
  name: '',
  email: '',
  message: ''
})

// Submission trigger callback function
const handleFormSubmit = () => {
  // Simple check layer verifying data properties are fully populated 
  if (formData.value.name && formData.value.email && formData.value.message) {
    
    // Display the custom notification tracking response request string alert
    alert("Message sent! Please wait for a response from our system administration team.");
    
    // Reset state inputs safely back to empty values for subsequent entries
    formData.value = {
      name: '',
      email: '',
      message: ''
    }
  }
}
</script>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 4rem;
  font-family: sans-serif;
}

.contact-header {
  margin-bottom: 3rem;
}

.contact-header h1 {
  font-size: 3rem;
  color: #111111;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 700;
}

.contact-header p {
  font-size: 1.25rem;
  color: #555555;
  margin: 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
}

.form-card {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01);
}

.form-card h2 {
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #111111;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #444444;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #0052cc;
}

.submit-btn {
  background-color: #0052cc;
  color: #ffffff;
  padding: 0.85rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #0043a4;
}

.info-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 0.5rem;
}

.info-block h3 {
  font-size: 1.1rem;
  color: #111111;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.info-block p {
  color: #555555;
  font-size: 1.05rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 2.5rem 2rem;
  }
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>

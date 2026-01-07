'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

interface FormData {
  name: string
  phone: string
  email: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should only contain letters'
        return ''
      
      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        const phoneRegex = /^[\+]?[0-9]{10,14}$/
        if (!phoneRegex.test(value.replace(/\s/g, ''))) return 'Please enter a valid phone number'
        return ''
      
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return ''
      
      default:
        return ''
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors: FormErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData])
      if (error) newErrors[key as keyof FormErrors] = error
    })

    setErrors(newErrors)
    setTouched({ name: true, phone: true, email: true })

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    
    setIsLoading(false)
    setSubmitted(true)
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '' })
      setSubmitted(false)
      setErrors({})
      setTouched({})
    }, 4000)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Image 
              src="/logo.png" 
              alt="The Tann Mann Gaadi Logo" 
              width={60} 
              height={60}
              className={styles.logo}
              priority
              unoptimized
            />
          </div>
          <h2 className={styles.headerTitle}>The Tann Mann Gaadi</h2>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.mainHeading}>Good Morning</h1>
        <p className={styles.subtitle}>
          Start your day bright! ☀️ Join our wellness community
        </p>

        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Get In Touch</h3>
          <p className={styles.formDescription}>
            Fill in your details and we'll reach out to you soon
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your full name"
                className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ''}`}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && touched.name && (
                <span id="name-error" className={styles.errorMessage} role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+91 XXX XXX XXXX"
                className={`${styles.input} ${errors.phone && touched.phone ? styles.inputError : ''}`}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && touched.phone && (
                <span id="phone-error" className={styles.errorMessage} role="alert">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="your.email@example.com"
                className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ''}`}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && touched.email && (
                <span id="email-error" className={styles.errorMessage} role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isLoading}
              aria-busy={isLoading ? 'true' : 'false'}
            >
              {isLoading ? (
                <>
                  <span className={styles.spinner}></span>
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>

            {submitted && (
              <div className={styles.successMessage} role="status" aria-live="polite">
                <div className={styles.successIcon}>✓</div>
                <div>
                  <strong>Success!</strong> Your information has been submitted successfully.
                </div>
              </div>
            )}
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            <strong>The Tann Mann Gaadi</strong> - Wellness on Wheels
          </p>
          <p className={styles.footerSubtext}>
            A Not-for-Profit Initiative for Health, Sanitation & Social Responsibility
          </p>
          <p className={styles.footerLinks}>
            <a href="#about" className={styles.footerLink}>About</a>
            <span className={styles.footerDivider}>•</span>
            <a href="#mission" className={styles.footerLink}>Our Mission</a>
            <span className={styles.footerDivider}>•</span>
            <a href="#contact" className={styles.footerLink}>Contact Us</a>
          </p>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} The Tann Mann Gaadi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

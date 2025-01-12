### **Deliverables**:
 **Live Vercel URL**:
   - Social Cause: [https://socialcause.vercel.app]

---

### **Write-Up**:

#### **Project Overview**:
The task was to build a **responsive user interface (UI)** for a **social cause platform**. The platform includes:
1. A **homepage** with a hero section and a cards section showcasing social causes.
2. A **"Get Involved" form page** for users to express interest in joining a cause.
3. A **footer** with social media links and contact information.
4. A **responsive design** that works seamlessly on both mobile and desktop devices.

---

#### **Approach**:
1. **Technology Stack**:
   - **Next.js**: Chosen for its server-side rendering (SSR) capabilities, file-based routing, and ease of deployment.
   - **Tailwind CSS**: Used for utility-first styling, enabling rapid development and responsive design.
   - **daisyUI**: Integrated as a Tailwind CSS plugin to leverage pre-built, customizable components (e.g., cards, buttons, forms).

2. **Design and Layout**:
   - The UI was designed to be clean, modern, and user-friendly.
   - **Hero Section**: Split into two parts:
     - **Left Side**: A slider showcasing 3 achievements with automatic infinite sliding.
     - **Right Side**: A call-to-action section with a title, subtitle, and button.
   - **Cards Section**: Displays 4 social cause cards, each with an image, title, description, and a "Learn More" button.
   - **"Get Involved" Form Page**: Includes input fields for name, email, and cause selection, along with a submit button.
   - **Footer**: Contains social media links and contact information.

3. **Responsive Design**:
   - Tailwind CSS was used to ensure the UI adapts to different screen sizes.
   - Media queries and flexbox/grid layouts were employed to create a seamless experience on mobile, tablet, and desktop devices.

4. **Slider Implementation**:
   - The slider on the hero section was implemented using **CSS animations** and **JavaScript**.
   - The `translateX` property was used to create a smooth sliding effect, and an interval was set to automatically transition between images every 3 seconds.

---

#### **Key Decisions**:
1. **Component-Based Architecture**:
   - The UI was broken down into reusable components (e.g., `Footer`, `Hero`, `Card`, `Nav`), making the code modular and maintainable.

2. **daisyUI for Pre-Built Components**:
   - daisyUI was chosen to speed up development and ensure consistency in design. Its pre-built components (e.g., cards, buttons, forms) were customized to fit the platform's theme.

3. **Responsive Design**:
   - Tailwind CSS's utility classes were used extensively to create a responsive layout without writing custom CSS.

4. **Slider for Engagement**:
   - A slider was added to the hero section to visually engage users and highlight achievements dynamically.

---

#### **Challenges and Solutions**:
1. **Slider Implementation**:
   - Initially, the slider had issues with smooth transitions. This was resolved by using CSS transitions and JavaScript for automatic sliding.

2. **Responsive Layout**:
   - Ensuring the layout looked good on all screen sizes required careful use of Tailwind's responsive utilities (e.g., `flex-col`, `lg:flex-row`).

---

#### **Future Improvements**:
1. **Interactive Features**:
   - Add theme mode change light/dark for better user interaction.
2. **Backend Integration**:
   - Connect the "Get Involved" form to a backend service (e.g., Firebase or a custom API) to store user submissions.
3. **Dynamic Content**:
   - Fetch social cause data from an API to make the platform more dynamic and scalable.

---

### **How to Run the Project Locally**:
1. Clone the repository:
   ```bash
   git clone https://github.com/touredri/social-cause.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser:
   ```bash
   http://localhost:3000
   ```

---

### **Conclusion**:
This project demonstrates the ability to build a responsive and visually appealing UI using modern web technologies. The use of Next.js, Tailwind CSS, and daisyUI ensured a fast and efficient development process, while the focus on modularity and responsiveness resulted in a user-friendly platform.

---

### **Links**:
- **Live Demo**: [https://socialcause.vercel.app]
- **GitHub Repository**: [https://github.com/touredri/social_cause]

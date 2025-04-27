// JavaScript للموقع الشخصي

// تأثيرات التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// تأثير ظهور العناصر عند التمرير
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
});

// تغيير لون الهيدر عند التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// تحديث روابط التواصل الاجتماعي
document.addEventListener("DOMContentLoaded", function() {
    // تأكيد تحديث روابط التواصل الاجتماعي (للتأكد من عملها بشكل صحيح)
    // رابط واتساب
    const whatsappLink = document.querySelector(".social-links a:first-child");
    if (whatsappLink) {
        whatsappLink.href = "https://wa.me/905382001585";
    }
    
    // رابط انستغرام
    const instagramLink = document.querySelector(".social-links a:nth-child(2)");
    if (instagramLink) {
        instagramLink.href = "https://instagram.com/xu4.ht";
    }
});

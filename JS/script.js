    
  // تحميل الصفحة بالكامل قبل تنفيذ الجافاسكريبت
        document.addEventListener('DOMContentLoaded', function() {
            // 1. تبديل القائمة (التحقق من وجود العناصر)
            const menuIcon = document.querySelector('#menu-icon');
            const navLinks = document.querySelector('.nav-links');
            const header = document.querySelector('.header');
            
            if (menuIcon && navLinks) {
                // تغيير أيقونة القائمة عند النقر
                menuIcon.addEventListener('click', function(e) {
                    e.stopPropagation();
                    navLinks.classList.toggle('active');
                    
                    // تغيير الأيقونة بين القائمة والإكس
                    if (navLinks.classList.contains('active')) {
                        menuIcon.classList.remove('fa-bars');
                        menuIcon.classList.add('fa-times');
                    } else {
                        menuIcon.classList.remove('fa-times');
                        menuIcon.classList.add('fa-bars');
                    }
                });
                
                // إغلاق القائمة عند النقر على رابط
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.addEventListener('click', () => {
                        navLinks.classList.remove('active');
                        menuIcon.classList.remove('fa-times');
                        menuIcon.classList.add('fa-bars');
                    });
                });
                
                // إغلاق القائمة عند النقر خارجها
                document.addEventListener('click', function(event) {
                    if (navLinks.classList.contains('active') && 
                        !navLinks.contains(event.target) && 
                        event.target !== menuIcon) {
                        navLinks.classList.remove('active');
                        menuIcon.classList.remove('fa-times');
                        menuIcon.classList.add('fa-bars');
                    }
                });
                
                // منع إغلاق القائمة عند النقر داخلها
                navLinks.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            }
            
            // 2. تأثير التمرير للشريط العلوي (التحقق من وجود العنصر)
            let lastScroll = 0;
            
            if (header) {
                window.addEventListener('scroll', () => {
                    const currentScroll = window.pageYOffset;
                    
                    // إخفاء الشريط عند التمرير لأسفل وإظهاره عند التمرير لأعلى
                    if (currentScroll > lastScroll && currentScroll > 100) {
                        header.style.transform = 'translate(-50%, -100%)';
                    } else {
                        header.style.transform = 'translate(-50%, 0)';
                    }
                    
                    // إضافة فئة عند التمرير لأسفل
                    if (currentScroll > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                    
                    lastScroll = currentScroll;
                });
            }
            
            // 3. إرسال النموذج (التحقق من وجود النموذج)
            const contactForm = document.querySelector('.contact-form');
            const successMessage = document.getElementById('success-message');
            
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    // عرض رسالة النجاح بدلاً من التنبيه
                    if (successMessage) {
                        successMessage.style.display = 'block';
                        
                        // إخفاء الرسالة بعد 5 ثواني
                        setTimeout(() => {
                            successMessage.style.display = 'none';
                        }, 5000);
                    }
                    
                    contactForm.reset();
                });
            }
            
            // 4. التمرير السلس (التحقق من وجود الروابط)
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        // حساب الموضع بدقة مع تعويض ارتفاع الشريط
                        const navbarHeight = header ? header.offsetHeight : 80;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });




  // اختيار عناصر DOM
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        // التحقق من تفضيل المستخدم المخزن
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
        }

        // إضافة حدث النقر على زر التبديل
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });



        

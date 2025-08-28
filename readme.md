What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
getElementById----> id দিয়ে কোনো এলিমেন্টকে সিলেক্ট করা যায়। এবং শুধু একটাই এলিমেন্টকে ধরে। আর আইডি সবসময় ইউনিকই রাখতে হয়।
getElementsByClassName----> class দিয়ে একাধিখ এলিমেন্টকে সিলেক্ট করা যায়  । একই নামের ক্লাস হলে সবগুলো ক্লাস এলিমেন্টকে একটি html collection হিসেবে দেয়।
querySelector------> class,id,tag etc.  দিয়ে ধরা যায় এবং একধিক এলিমেন্টে একই সিলেক্টরের নাম থাকলেও শুধু প্রথম এলিমেন্টকে সিলেক্ট করে।
 querySelectorAll----> class,id,tag etc.  দিয়ে ধরা যায় এবং একধিক এলিমেন্টে একই সিলেক্টরের নাম থাকলেও একাধিক এলিমেন্টকে সিলেক্ট করে এবং একটি নোড লিস্ট দেয়।

How do you **create and insert a new element into the DOM**?
প্রথমে একটা এলিমেন্ট তৈরি করতে হবে।যেমন: document.createElement("div")।
তারপর এলিমেন্ট এ কন্টেন্ট দিতে হবে।যেমন:  innerText="Jinnah", innerHtml, textContent ।
এরপর কোনো এলিমেন্টে যোগ করতে হবে। যেমন:append,appendChild, prepend । 

What is **Event Bubbling** and how does it work?
যদি কোনো চাইল্ড element এ কোনো ইভেন্ট ঘটে তখন তা ধাপে ধাপে উপরের দিকে মানে চাইল্ড থেকে প্যারেন্ট , পারেন্ট থেকে তার প্যারেন্টে এভাবে যেতে থাকে ডকুমেন্ট পযন্ত। মুলত এটাই ইভেন্ট বাবেলিং।

What is **Event Delegation** in JavaScript? Why is it useful?
js এ ইভেন্ট ডেলিগেশন হলো একটি অসাধারণ টেকনিক ।যার সাহায্যে একটি প্যারেন্ট এলিমেন্টের সকল চাইল্ড এলিমেন্টের event হ্যান্ডেল
 করা যায়। ফলে প্রচুর কোড লেখতে হয় না এবং এর পারফরমেন্সও দারুন হয় । এছাড়া এটার সাহায্যে ডায়নামি এলিমেন্টকে হ্যান্ডেল করা যায়। তাই এটি খুবই ইউজফুল।

What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault()----> browser এর ডিফল্ট বিহেবিওর বন্ধ করে দেয়।
stopPropagation() -------> event কে বাবেলিং করতে বাধা দেয়। 

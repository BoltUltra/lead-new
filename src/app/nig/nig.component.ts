import { Component } from '@angular/core';

@Component({
  selector: 'app-nig',
  templateUrl: './nig.component.html',
  styleUrls: ['./nig.component.css'],
})
export class NigComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  testimonials = [
    {
      name: 'Wakabul Gomwalk',
      testimonial:
        '“In all honesty, I would recommend many students - whether in primary school or university like me - to take advantage of this. I wish I had known sooner, then perhaps a lot of those cracks in my early foundations in Math would have been addressed earlier. LEAD tutoring is a valuable component to my success and improvement in Math as well as an ongoing help in my Physics now. Take this opportunity like I did ! You might even get a lot more out of it than I did.”',
      image: 'wakabul-gomwalk.png',
      title: '100lvl, Architecture, Rice University USA',
    },
    {
      name: 'Ibrahim Oyewale',
      testimonial:
        '“My tutor has been such a big help to me, from my high school days through my university mathematics and physics courses. He’s been very professional, respectful, and understanding. He takes the time to understand the topic or concept I am dealing with—whether it’s from Physics, Calculus, or Linear Algebra—and proceeds to make it tremendously easier for me to understand. He keeps a light-hearted tone for the entire class but is still straight to the point with the topics we are working on.”',
      image: 'ibrahim-oyewale.png',
      title: '200lvl, Computer Engineering, Ontario Tech University Canada',
    },
    {
      name: 'Debby Ali',
      testimonial:
        'Learning at the LEAD hub has genuinely been a fascinating experience. It is one thing to teach and another to make one feel like they’re making progress. The tutors ensured that I felt encouraged and happy throughout the sessions. I have never felt confident learning mathematics before now but I have noticed that perspective changing recently. The tutors respect my learning pace as they patiently walk me through the course content. I do not feel reassured to impress my tutors and I am making rapid progress in preparing for my college prep examinations. I also appreciate the endless amusing energy they radiate in class. In conclusion, it has been a fantastic experience away from the regular.',
      image: 'debby-ali.png',
      title: 'College prep',
    },
  ];

  faqItems = [
    {
      question: 'Where do I get pricing information?',
      answer:
        '“My tutor has been such a big help to me, from my high school days through my university mathematics and physics courses. He’s been very professional, respectful, and understanding. He takes the time to understand the topic or concept I am dealing with—whether it’s from Physics, Calculus, or Linear Algebra—and proceeds to make it tremendously easier for me to understand. He keeps a light-hearted tone for the entire class but is still straight to the point with the topics we are working on.”',
    },
    {
      question: 'How effective are your online classes?',
      answer:
        '“My tutor has been such a big help to me, from my high school days through my university mathematics and physics courses. He’s been very professional, respectful, and understanding. He takes the time to understand the topic or concept I am dealing with—whether it’s from Physics, Calculus, or Linear Algebra—and proceeds to make it tremendously easier for me to understand. He keeps a light-hearted tone for the entire class but is still straight to the point with the topics we are working on.”',
    },
    {
      question: 'Do you have a curriculum and tutors for non-academic skills?',
      answer:
        '“My tutor has been such a big help to me, from my high school days through my university mathematics and physics courses. He’s been very professional, respectful, and understanding. He takes the time to understand the topic or concept I am dealing with—whether it’s from Physics, Calculus, or Linear Algebra—and proceeds to make it tremendously easier for me to understand. He keeps a light-hearted tone for the entire class but is still straight to the point with the topics we are working on.”',
    },
    {
      question: 'How can I join your team to tutors?',
      answer:
        '“My tutor has been such a big help to me, from my high school days through my university mathematics and physics courses. He’s been very professional, respectful, and understanding. He takes the time to understand the topic or concept I am dealing with—whether it’s from Physics, Calculus, or Linear Algebra—and proceeds to make it tremendously easier for me to understand. He keeps a light-hearted tone for the entire class but is still straight to the point with the topics we are working on.”',
    },
  ];

  expandedIndex = 0;

  setExpandedIndex(index: number) {
    this.expandedIndex = index;
  }
}

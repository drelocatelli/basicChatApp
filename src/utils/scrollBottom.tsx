function scrollToBottom({element, behavior} : {element: HTMLElement | HTMLDivElement | null, behavior?: string}) {
    if(element) {
        element.style.scrollBehavior = behavior ?? 'auto';
        setTimeout(() => {
            element.scrollTop = element.scrollHeight;
            console.log('scrolled to bottom');
        }, 100);
    }
  }

  
export {scrollToBottom};
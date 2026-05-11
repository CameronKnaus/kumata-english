type ScrollTargetTo = 'start' | 'center' | 'end' | 'nearest';

interface ScrollToTargetParams {
  targetId: string;
  scrollTargetTo?: ScrollTargetTo;
  delay?: number;
}

// This is me being lazy.
type ScrollToTargetEvent = { preventDefault: () => void };

export default function scrollToTarget(
  params: ScrollToTargetParams,
  event?: ScrollToTargetEvent
) {
  event && event.preventDefault && event.preventDefault();

  if (!params.targetId) {
    return;
  }

  const scroll = function () {
    const questionModule = document.getElementById(params.targetId);

    const scrollBehavior = {
      behavior: 'smooth' as const,
      block: params.scrollTargetTo || 'start',
    };
    questionModule && questionModule.scrollIntoView(scrollBehavior);
  };

  params.delay ? setTimeout(scroll, params.delay) : scroll();
}

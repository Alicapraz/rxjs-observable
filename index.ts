import { Observable, Subscriber } from 'rxjs';

const interval$ = new Observable<number>((Subscriber) => {
  let sayac = 1;
  const intervalId = setInterval(() => {
    console.log('Sayı', sayac);
    Subscriber.next(sayac++);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = interval$.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log('Bitir');
  subscription.unsubscribe();
}, 5000);

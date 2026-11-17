export const CAPACITIES=[8,16,24];
export function initial(){return {coins:0,bag:0,level:0,plot:false,sold:0,mission:0,rewarded:[],plants:Array(24).fill(0),player:{x:470,y:470}}}
export function harvest(s,i){if(s.bag>=CAPACITIES[s.level]||s.plants[i]>0||i>=12&&!s.plot)return false;s.plants[i]=12;s.bag++;return true}
export function sell(s){if(!s.bag)return false;s.bag--;s.coins+=5;s.sold++;return true}
export function upgradeBag(s){const cost=s.level===0?40:90;if(s.level>=2||s.coins<cost)return false;s.coins-=cost;s.level++;return true}
export function unlock(s){if(s.plot||s.coins<60)return false;s.coins-=60;s.plot=true;return true}
export function missions(s){let changed=false;while(s.mission<3){const done=[s.sold>=5,s.level>=1&&s.plot,s.sold>=40][s.mission];if(!done)break;s.coins+=[20,40,100][s.mission];s.mission++;changed=true}return changed}

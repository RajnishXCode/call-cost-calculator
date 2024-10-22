import Nat "mo:base/Nat";
import Result "mo:base/Result";
import Error "mo:base/Error";
import ExperimentalCycles "mo:base/ExperimentalCycles";
actor {
  let p2_canID="cgpjn-omaaa-aaaaa-qaakq-cai";
  let p2=actor(p2_canID):actor{
    greet : query (Text) -> async Text;
  };
  var count:Nat=0;
  
  public shared func call_p2(name:Text):async Result.Result<(Nat,Nat,Nat,Nat),Text>{
    try{
      let balanceBefore=ExperimentalCycles.balance();
      ignore await p2.greet(name);
      count:=count+1;
      let balanceAfter=ExperimentalCycles.balance();
      let deduction = balanceBefore - balanceAfter;

      
      return #ok((count,balanceBefore,balanceAfter,deduction))

    }catch e{
      return #err(Error.message(e))
    }
  }
};

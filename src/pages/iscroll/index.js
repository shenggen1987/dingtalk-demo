/**
 * Created by ChenYX on 2016/9/22.
 */

let { Group, Tab, List, Scroller, Boxs, Icon} = SaltUI;

export default class Login extends React.Component {

		handleScrollEnd(t, n,d) {
				console.log(t.x);
				console.log(t,n,d)
		  }

		  handleScrollStart(t, n) {
				console.log(t)
		  }

        render() {
        	var t = this;
			    return (
			        <Scroller onScrollEnd={t.handleScrollEnd.bind(t)} 
			        onScrollStart={t.handleScrollStart.bind(t)} 
			        eventPassthrough='horizontal' momentum={false} invertWheelDirection={true} 
			        scrollbars={true}
			        freeScroll={true} mouseWheel={false} probeType={2}>
			            <Group.Head>{"列表标题1"}</Group.Head>
			            <Group.List>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			                <div className="t-LH44 t-PL10">aa</div>
			            </Group.List>
			        </Scroller>
			    );
			}
}

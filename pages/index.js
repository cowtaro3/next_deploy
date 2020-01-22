import { useState } from 'react'

const Home = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div class="top_nav_menu">
        <div class="top_nav_menu_box">
            <div class="top_nav_menu_title">
                <h1>タイトル</h1>
            </div>

            <div class="top_nav_menu_search">
                <input type="text"/>
                <a href="#">
                    <img src="search.svg" alt=""/>
                </a>
            </div>

            <div class="top_nav_menu_items">
                <a href="javascript:void(0)" onClick={() => open ? setOpen(false) : setOpen(true)}>
                    <img src="./humburger.svg" alt="top_nav_menu_items"/>
                </a>
            </div>
        </div>
    </div>




    <div class="side_nav_menu">
        <span class="closebtn" onClick={() => open ? setOpen(false) : setOpen(true)}>
        <div id="mySideNav" class={open ? "side_nav_menu_box open" : "side_nav_menu_box"}>
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="#">ホーム</a>
            <a href="#">プロフィール</a>
            <a href="#">投稿</a>
            <a href="#">ログイン</a>
        </div>
        </span>
    </div>


    

    <div class="content_box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis saepe illum animi aliquam hic. Inventore, recusandae, incidunt quas delectus eveniet autem labore at laborum aperiam ut officiis corrupti tempora repudiandae exercitationem alias iure vero, velit accusamus sequi tenetur illo repellat harum saepe. Eum deleniti, enim pariatur, tempora hic ullam voluptas molestiae aperiam iure accusamus aut incidunt doloribus cumque animi libero soluta laboriosam tenetur magni qui fuga! Nisi, eligendi architecto. Quaerat fuga ea ipsum sint a laudantium accusantium id ad mollitia debitis fugiat eius commodi ut eos, aliquam cupiditate, nisi modi deleniti architecto ipsam tenetur animi at et illo. Expedita, reprehenderit debitis. Accusantium reiciendis sit hic, nemo quas culpa molestiae natus pariatur sint nobis nostrum praesentium ut illum nisi molestias totam autem blanditiis perferendis deleniti explicabo incidunt et iste. Omnis hic minima inventore assumenda nesciunt voluptatem commodi doloremque officiis veritatis exercitationem. Provident dolore veniam, earum, harum voluptate ipsam nam cumque maiores expedita cupiditate dolor recusandae omnis accusantium? Officiis cumque aliquid illo laborum qui enim consectetur perferendis aut unde iure commodi doloribus expedita inventore, illum sed natus ipsam eligendi harum repudiandae deserunt molestiae delectus. Ea, vero nemo! Dolores in nulla corporis quam voluptas explicabo optio, architecto deleniti velit vitae minus sequi eius voluptate eos. Asperiores, dignissimos sed repudiandae cupiditate molestias repellendus neque nam vero, soluta minus ut perferendis blanditiis placeat dicta rem optio quasi eos. Perferendis architecto enim vitae deleniti quia. Ad similique dolores dolore neque voluptas, sint soluta animi rerum, reiciendis maiores officiis quo. Eius expedita voluptate cum, nostrum ipsum fugiat assumenda nisi quam, tempore deserunt temporibus? Omnis, deserunt ipsum magnam rerum in vel repellendus, ullam placeat possimus similique, vitae modi sint excepturi itaque atque et eaque architecto. Quod nemo, esse possimus sapiente asperiores perspiciatis repellat magnam quisquam repudiandae veniam molestiae totam! Qui voluptatum minima maxime quae perspiciatis provident ducimus veritatis, animi nobis accusamus sit iste, soluta magnam quas dolores neque dolore sint officia quam consequatur, assumenda tempore tempora repellat natus. Sapiente, ducimus facere? Rem sint nam eum voluptate animi sequi ab iure quia cupiditate. Fugit accusantium tenetur totam, eum labore est a ab officiis nulla natus, odit ducimus sequi praesentium doloribus pariatur iusto molestias culpa facere? Quia laudantium nihil fuga qui inventore vero reiciendis enim esse, quisquam odio ad numquam corporis unde sapiente eos optio praesentium quos repellendus atque sed! Voluptas, libero perspiciatis officiis amet esse alias. Dolore cumque, velit quisquam dolores molestias officiis eum totam eveniet reprehenderit quas distinctio ea optio a, doloremque sequi eos id! Rerum inventore fuga ab eveniet ad recusandae, dolores illum? Unde nisi nobis necessitatibus delectus impedit repellendus, libero ipsam a nulla cupiditate accusantium deserunt magni neque at. Minus officia id dolorum cum repudiandae veritatis sequi obcaecati tempore animi, eos, voluptatum doloremque ab facere pariatur explicabo voluptas quo! Velit atque dicta fugit aspernatur incidunt debitis officia assumenda perspiciatis quas, ipsa aperiam nemo natus eos cupiditate! Consectetur, commodi cum nam et illum blanditiis inventore iste debitis similique illo, vitae eum. Tenetur laborum, sed similique quisquam quae repellat. Deleniti hic adipisci nostrum quam autem eius, vel sapiente ad. Blanditiis mollitia aut sunt quia. Cumque magni itaque nisi quos labore. Deleniti quaerat, est cum deserunt sint quam dolorem. Animi id, fuga incidunt laudantium saepe inventore odio facilis facere maiores deserunt obcaecati, est omnis accusantium mollitia culpa. Porro debitis ipsam iure quidem vitae quis incidunt sint mollitia tenetur cumque a ducimus error deserunt quisquam voluptatibus eius voluptates quos molestias quaerat facilis placeat, officia assumenda quia neque. Incidunt, nesciunt ipsam eveniet officia sunt doloremque. Ex cum exercitationem suscipit. Praesentium, omnis? Ullam alias cupiditate maxime molestias nam nesciunt aperiam dolores sequi illum animi neque nihil dolorem, voluptatum assumenda veritatis facere repudiandae quia recusandae optio aliquid hic corporis quis quaerat. Nihil ipsam alias quo, animi veniam, at a blanditiis tempora magni nulla vero dolore. Iste, explicabo. Quidem vero perferendis officiis, dignissimos totam atque repellendus maiores est veniam consequatur sapiente aperiam deleniti possimus quisquam, sed molestias beatae obcaecati sint. Ipsum beatae dignissimos pariatur molestiae, alias omnis incidunt nihil, eligendi voluptas laboriosam vel at ab repellendus voluptates quisquam natus, voluptatem quod similique nemo optio qui labore? Nulla doloremque enim impedit distinctio deserunt voluptatem ducimus, aliquam possimus aut qui, maxime amet sapiente sed iusto temporibus in soluta praesentium, optio repudiandae animi molestias ex illum. Molestias provident consequuntur veniam quidem harum possimus explicabo nemo, fugit adipisci aut. Mollitia corporis eaque architecto pariatur praesentium qui et repellendus illo a nihil numquam quod ipsum voluptas placeat, cupiditate suscipit necessitatibus temporibus excepturi inventore laboriosam eligendi saepe ex. Voluptatibus nobis cupiditate iusto aliquid, optio eius asperiores commodi! Rem, magnam. Quam odio natus quisquam dicta explicabo porro perspiciatis iure doloribus dolores, et repellat quae cum, modi eligendi! Nesciunt, possimus provident eaque rem dignissimos architecto sunt voluptas recusandae ullam obcaecati, sequi modi vel nostrum dolorem, magnam fugit fuga nam placeat earum? Alias quo at iure hic harum nobis vero incidunt numquam eum. Est reiciendis provident qui inventore quae assumenda dolorum. Deleniti quisquam natus corrupti facere rerum quasi quod architecto animi perferendis enim atque, laudantium iusto officia dolorem sapiente aspernatur ipsum? Optio ex mollitia doloribus sit numquam in. Nam, ex eaque iure enim corporis unde culpa alias in dolor deserunt eius voluptate nesciunt neque, illo tempora amet nihil voluptas! Vero quos aut voluptates, quaerat, veniam qui eaque tempora aliquam ut, amet cumque dolore architecto dicta obcaecati quod molestiae tempore nesciunt provident ipsam quidem illo temporibus ullam doloremque quasi. Distinctio qui alias, officiis autem, fugit inventore consequuntur pariatur magnam dolore corrupti beatae? Voluptas maiores, distinctio similique itaque perspiciatis veniam libero recusandae quidem expedita commodi nam aut est minima harum dolore a, consequuntur deserunt vitae animi, error excepturi quibusdam nemo provident magni. Veniam pariatur adipisci quo vel nesciunt unde facere totam voluptatum soluta corporis dolor voluptatibus ab qui maiores labore, sequi quis autem ad cupiditate assumenda? Nesciunt vitae possimus modi recusandae ratione id sed ad a voluptates nam ipsa optio facere iste maxime velit explicabo, dolore in qui itaque, saepe dolores magni alias. Nobis animi sequi temporibus aliquid explicabo voluptatibus repellendus inventore, porro error, cupiditate repellat laborum sunt voluptatum incidunt totam tempora? Perferendis, delectus.
    </div>




    <div class="add_float_btn">
        <div class="add_float_btn_box">
            <a href="#">
                <img src="./plus.svg" alt="add_float_btn"/>
            </a>
        </div>
    </div>




    <div class="bottom_nav_menu">
        <div class="bottom_nav_menu_box">

            <div class="top_nav_menu_column">
                <a href="#">
                    <img src="./user.svg" alt="top_nav_menu_items"/>
                    <h1>ホーム</h1>
                </a>
            </div>

            <div class="top_nav_menu_column">
                <a href="#">
                    <img src="./post.svg" alt="top_nav_menu_items"/>
                    <h1>ポスト</h1>
                </a>
            </div>

            <div class="top_nav_menu_column">
                <a href="#">
                    <img src="./setting.svg" alt="top_nav_menu_items"/>
                    <h1>設定</h1>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
